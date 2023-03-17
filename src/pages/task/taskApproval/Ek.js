import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../taskCSS/Ek.css'

function Ek ( {setNoteValue, setNoteEditor} ){

    const editorConfiguration = {
        toolbar : ['bold', 'italic'],
    }

    return (
        <CKEditor
            editor={ ClassicEditor }
            data=""
            onBlur={ ( event, editor ) => {
                setNoteValue(editor.getData());
                setNoteEditor(editor);
            } }
            config={ editorConfiguration }
        />
    )
}

export default Ek;